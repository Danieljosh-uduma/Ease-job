
import Broadcaster from "../dashboardImages/broadcast.png";

export default function Broadcast() {
  return (
    <>
      <div className="flex flex-col h-full w-1/3 justify-center items-center">
        <div className="flex h-full width-full rounded-3xl bg-[#F0FDF4] items-center justify-center">
          <img src={Broadcaster} alt="" className="flex h-[90%] w-[90%] rounded-xl" />
        </div>
      </div>
    </>
  )
}