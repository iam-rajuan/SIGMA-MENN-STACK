import Image from "next/image";

export default function Home() {
  return (
<div className="relative w-70vw h-100">
  {/* <Image className="my-40" src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-800.jpg" layout="fill" objectFit="cover" alt="" /> */}
  <Image src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-800.jpg" width={500} height={500} alt="" />
</div>
  );
}
