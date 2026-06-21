import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function Loader({ onFinish }) {
  const text = "BARATH PORTFOLIO";

  const [displayText, setDisplayText] = useState("");
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Using a stable audio instance so it can keep playing even if StrictMode
    // mounts/unmounts the component while the loader is finishing.
    const sound = new Audio("/sounds/gta-intro.mp3");
    sound.volume = 1;
    sound.preload = "auto";
    sound.muted = false;

    let hasPlayedOnce = false;

    const playAudio = () => {
      if (hasPlayedOnce) return;
      hasPlayedOnce = true;

      // reset in case previous attempt was blocked
      try {
        sound.currentTime = 0;
      } catch (_) {}

      sound
        .play()
        .then(() => console.log("Audio playing"))
        .catch((e) => {
          // If play is still blocked, allow a later user gesture to retry.
          console.log("Audio play blocked:", e);
          hasPlayedOnce = false;
        });
    };

    // Try immediately; if blocked, wait for user gesture.
    playAudio();

    const onUserGesture = () => playAudio();
    window.addEventListener("pointerdown", onUserGesture, { once: true });
    window.addEventListener("click", onUserGesture, { once: true });

    let index = 0;

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index > text.length) {
        clearInterval(typing);

        setTimeout(() => {
          // Make one more attempt right before the loader finishes.
          playAudio();
          setLoadingComplete(true);

          setTimeout(() => {
            // And again just before exiting the loader.
            playAudio();
            if (onFinish) onFinish();
          }, 1000);
        }, 1500);
      }
    }, 180);

    return () => {
      clearInterval(typing);
      // IMPORTANT: do not pause/reset here; Loader unmounts right after onFinish
      // and pausing can make the audio appear only after the loader disappears.
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!loadingComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-black flex items-center justify-center"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#090014] to-black" />

          {/* Pink Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute w-[900px] h-[900px] rounded-full bg-fuchsia-500/20 blur-[220px]"
          />

          {/* Cyan Glow */}
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute w-[700px] h-[700px] rounded-full bg-cyan-400/20 blur-[180px]"
          />

          {/* Moving Light Beam */}
          <motion.div
            animate={{
              x: ["-100%", "120%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-full w-[250px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"
          />

          {/* Floating Particles */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -1000],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 6 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 rounded-full bg-cyan-400"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: "-20px",
              }}
            />
          ))}

          {/* Scan Lines */}
          <div
            className="
              absolute
              inset-0
              opacity-10
              bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.15)_50%)]
              bg-[length:100%_4px]
            "
          />

          {/* Name */}
          <div className="relative z-20 text-center">
            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                text-6xl
                md:text-[150px]
                font-black
                tracking-[20px]
                bg-gradient-to-r
                from-fuchsia-400
                via-white
                to-cyan-400
                bg-clip-text
                text-transparent
                drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]
              "
            >
              {displayText}

              <motion.span
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className="text-white"
              >
                |
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: displayText.length === text.length ? 1 : 0,
              }}
              transition={{ duration: 1 }}
              className="
                mt-6
                text-cyan-300
                tracking-[10px]
                uppercase
                text-sm
              "
            >
              Full Stack Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}