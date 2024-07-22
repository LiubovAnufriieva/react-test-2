import css from "./FriendList.module.css"
import { FcOnlineSupport } from "react-icons/fc"
import { IoCloudOffline } from "react-icons/io5"

export default function FriendListItem( {friend: { avatar, name, isOnline }}) {
  return (
    <div className={css.listItem}>
      <img className={css.ava} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? <FcOnlineSupport /> : <IoCloudOffline /> }</p>
    </div>
  )
}

 
