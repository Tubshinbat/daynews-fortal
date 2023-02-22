import base from "lib/base";
import { getWebInfo } from "lib/webinfo";

export default async function Loading() {
  const { webInfo } = await getWebInfo();
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="spinner-bg">
        
        <div className="lds-dual-ring"></div>
      </div>
    </>
  );
}
