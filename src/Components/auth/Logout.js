import { useEffect } from "react";
import { signOut } from "../../store/actions/authActions";
import { store } from '../../store/store';

const Logout = () => {
    useEffect(() => {
        store.dispatch(signOut());
        window.location = "/login";
    })
    return null;
}
export default Logout;