import { WebIO } from "@gltf-transform/core";
import { textureResize } from "@gltf-transform/functions";

console.log("LOADED SCRIPT");

async function transform(url) {
  console.log("start transforming");
  const io = new WebIO({ credentials: "include" });
  const doc = await io.read(url);
  await doc.transform(
    textureResize({
      size: [2048, 2048]
    })
  );
  console.log("transformed");

  const result = io.writeBinary(doc);
  return result;
}

transform("/DamagedHelmet.glb");
