import './profile-sidebar.scss'
import Switch from "../../assets/ui/switch/switch.tsx";
import {NavLink} from "react-router-dom";

const ProfileSidebar = () => {
    return <div className='profile-sidebar'>
      <div className='sidebar-user-info G-align-center'>
          <div className='sidebar-user-logo G-center' >
              <img src="/sidebarUserLogo.png" alt="userLogo"/>
              <i className='icon icon-add'></i>
          </div>

          <div className='sidebar-user-name'>
              <h2>Marie Berger Very Long Name_XX</h2>
              <p>Profile ID 1010101010</p>
          </div>
      </div>


        <div className='s-user-status'>
             <div className='s-status-switch G-align-center'>
                 <Switch variant={'green-switch'}/>
                 <p>Online</p>
             </div>
            <p className='user-status-clue'>Online status lets clients know you’re open to meet right now</p>
        </div>

        <div className='s-profile-tools'>
            <div className='p-tools-texts'>
                <h3>My Ad Profile</h3>
                <p>Unpaid, hidden</p>
            </div>

            <div className='p-tools-items G-flex-column'>
                <div className='p-tools-item G-align-center'>
                    <i className='icon icon-edit'></i>
                    <p>Edit My Ad Profile</p>
                </div>
                <div className='p-tools-item G-align-center'>
                    <i className='icon icon-visibility'></i>
                    <p>Preview as client</p>
                </div>
            </div>


        </div>

        <nav className='s-profile-menu'>
              <ul className='G-flex-column'>
                  <li>
                      <NavLink to={'#'}>
                          My Crush balance  <span>100 USD</span>
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to={'#'}>
                          My messages
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to={'#'}>
                          My reviews
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to={'#'}>
                          My promo
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to={'#'}>
                          Notifications
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to={'#'}>
                          My Stories
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to={'#'}>
                          My Health status
                      </NavLink>
                  </li>
              </ul>

            <p className='s-profile-exit'>Exit</p>
        </nav>
    </div>
};

export default ProfileSidebar;