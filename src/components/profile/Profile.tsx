// import { useAtomValue } from "jotai";
// import { isOpenAtom } from "../../jotai/stor";
import { IProfile } from "./types.profile";
import { PrintDelText } from "../UI/motionUi/PrintDelText";

export function Profile({ img, login, email }: IProfile) {
  // const isOpen = useAtomValue(isOpenAtom);

  return (
    <>
      <div className="flex pl-2.5 pt-2.5 pb-2.5 shadow-md rounded-md">
        <img
          className="mr-2 w-9 h-9 rounded-full object-cover"
          src={img}
          alt="profile"
        />
        <div className="overflow-hidden">
          <h1 className="text-base">
            <PrintDelText text={login} key={1} />
          </h1>
          <h1 className="text-xs">
            <PrintDelText text={email} key={2} />
          </h1>
        </div>
      </div>
    </>
  );
}
