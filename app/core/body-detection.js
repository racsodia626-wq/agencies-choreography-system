// Módulo de detección corporal — MoveNet Lightning
// Carga independiente, falla silenciosamente si algo no funciona

const KEYPOINTS = { nose: 0, leftShoulder: 5, rightShoulder: 6, leftHip: 11, rightHip: 12, leftAnkle: 15, rightAnkle: 16 };
const TARGET_FPS = 10;
const INTERVAL_MS = 1000 / TARGET_FPS;

let detector = null;
let loopId = null;
let running = false;

async function initBodyDetection(videoElement, onPoseCallback) {
  try {
    await tf.setBackend('webgl');
    await tf.ready();

    const model = poseDetection.SupportedModels.MoveNet;
    const config = { modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING };
    detector = await poseDetection.createDetector(model, config);

    running = true;
    loop(videoElement, onPoseCallback);
  } catch (err) {
    console.warn('[body-detection] init failed:', err);
  }
}

function loop(videoElement, onPoseCallback) {
  if (!running) return;

  loopId = setTimeout(async () => {
    try {
      if (videoElement.readyState >= 2 && detector) {
        const poses = await detector.estimatePoses(videoElement);
        if (poses && poses.length > 0) {
          const normalized = normalizePose(poses[0], videoElement);
          onPoseCallback(normalized);
        }
      }
    } catch (err) {
      // falla silenciosamente
    }
    loop(videoElement, onPoseCallback);
  }, INTERVAL_MS);
}

function normalizePose(pose, videoElement) {
  const w = videoElement.videoWidth  || 1;
  const h = videoElement.videoHeight || 1;

  const result = {};
  for (const [name, index] of Object.entries(KEYPOINTS)) {
    const kp = pose.keypoints[index];
    result[name] = {
      x: kp.x / w,
      y: kp.y / h,
      score: kp.score ?? 0
    };
  }
  return result;
}

function stopBodyDetection() {
  running = false;
  if (loopId !== null) {
    clearTimeout(loopId);
    loopId = null;
  }
  if (detector) {
    try { detector.dispose(); } catch (_) {}
    detector = null;
  }
}
