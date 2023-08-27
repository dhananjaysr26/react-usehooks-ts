import { useEffect, useState } from "react";

interface Props {
  startOtpDetection?: boolean;
  timeoutInMin?: number;
}

export const useAutoReadOtp = ({
  startOtpDetection = false,
  timeoutInMin = 5,
}: Props): [string | null, boolean, string] => {
  const [isOtpDetecting, setIsOtpDetecting] = useState(true);
  const [detectedOTP, setDetectedOTP] = useState<string | null>(null);
  const [otpDetectError, setOtpDetectError] = useState("");

  let timeId: any = null;
  let signalId: any = null;

  const autoReadSMS = () => {
    signalId = new AbortController();
    timeId = setTimeout(() => {
      signalId.abort();
      setIsOtpDetecting(false);
    }, 1000 * 60 * timeoutInMin);

    async function main() {
      if ("OTPCredential" in window) {
        try {
          if (navigator.credentials && "OTPCredential" in window) {
            try {
              const content = await (navigator.credentials as any).get({
                abort: signalId,
                otp: { transport: ["sms"] },
              });

              if (content && content.code) {
                setDetectedOTP(content.code);
              }
            } catch (e) {
              setOtpDetectError("Error detecting OTP");
              console.error(e);
            }
          } else {
            setOtpDetectError(
              "Auto-detect OTP is not available in Desktop browsers"
            );
            setIsOtpDetecting(false);
          }
        } catch (err) {
          setOtpDetectError("Error detecting OTP");
          console.error(err);
        }
      } else {
        setOtpDetectError(
          "Auto-detect OTP is not available in Desktop browsers"
        );
        setIsOtpDetecting(false);
      }
    }
    main();
  };

  useEffect(() => {
    if (startOtpDetection) {
      autoReadSMS();
    }

    return () => {
      if (signalId) {
        signalId.abort();
      }
      if (timeId) {
        clearTimeout(timeId);
      }
    };
  }, [startOtpDetection]);

  return [detectedOTP, isOtpDetecting, otpDetectError];
};
