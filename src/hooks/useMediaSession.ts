import { useEffect } from "react";

type PlaybackState = "none" | "paused" | "playing";
interface ArtWork {
  src: string;
  sizes: string;
  type: string;
}
interface MEDIA {
  title: string;
  artist: string;
  artwork: ArtWork[];
}

interface MediaSessionOptions {
  playbackState?: PlaybackState;
  onPlay?: () => void;
  onPause?: () => void;
  onSeekBackward?: () => void;
  onSeekForward?: () => void;
  onPreviousTrack?: () => void;
  onNextTrack?: () => void;
  onSeekTo?: () => void;
  onSkipAd?: () => void;
  onStop?: () => void;
  mediaInfo: MEDIA;
}

const isMediaSessionAvailable =
  typeof window !== "undefined" && "mediaSession" in window.navigator;

const bindActionHandler = (
  action: MediaSessionAction,
  callback?: () => void
) => {
  if (!isMediaSessionAvailable || !callback) return;

  window.navigator.mediaSession.setActionHandler(action, callback);

  return () => {
    window.navigator.mediaSession.setActionHandler(action, null);
  };
};

const useMediaSession = ({
  playbackState = "none",
  mediaInfo,
  onPause,
  onPlay,
  onNextTrack,
  onPreviousTrack,
  onSeekBackward,
  onSeekForward,
  onSeekTo,
  onSkipAd,
  onStop,
}: MediaSessionOptions): void => {
  useEffect(() => {
    if (!isMediaSessionAvailable) return;

    // Set the playback state
    window.navigator.mediaSession.playbackState = playbackState;

    return () => {
      // Reset playback state on cleanup
      window.navigator.mediaSession.playbackState = "none";
    };
  }, [playbackState]);

  useEffect(() => {
    if (isMediaSessionAvailable) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: mediaInfo?.title,
        artist: mediaInfo?.artist,
        artwork: mediaInfo?.artwork,
      });
    }
  });

  useEffect(() => bindActionHandler("play", onPlay), [onPlay]);
  useEffect(() => bindActionHandler("pause", onPause), [onPause]);
  useEffect(() => bindActionHandler("nexttrack", onNextTrack), [onNextTrack]);
  useEffect(
    () => bindActionHandler("previoustrack", onPreviousTrack),
    [onPreviousTrack]
  );
  useEffect(
    () => bindActionHandler("seekbackward", onSeekBackward),
    [onSeekBackward]
  );
  useEffect(
    () => bindActionHandler("seekforward", onSeekForward),
    [onSeekForward]
  );
  useEffect(() => bindActionHandler("seekto", onSeekTo), [onSeekTo]);
  useEffect(() => bindActionHandler("skipad", onSkipAd), [onSkipAd]);
  useEffect(() => bindActionHandler("stop", onStop), [onStop]);
};

export default useMediaSession;
