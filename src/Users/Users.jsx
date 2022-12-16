import React from "react";

import styles from './Users.module.css';

import dp1 from '../Assets/Ellipse9dp1.png'
import dp2 from '../Assets/Ellipse10dp2.png'
import dp3 from '../Assets/Vectordp3.png'

function Users() {
  return (
    <div className={styles.users}>
      <main className={styles.main}>
        <div className={styles.owner}>
          <h3 className={styles.heading}>
            Owner - 1
          </h3>
          <div className={styles.details}>
            <img className={styles.images} src={dp1} alt="owner"/>
            <div className={styles.content}>
              <p className={styles.ownername}>figmadesigns</p>
              <p>Hi im figmadesigns!</p>
            </div>
          </div>
        </div>

        <div className={styles.admin}>
          <h3 className={styles.heading}>
            Admin - 1
          </h3>
          <div className={styles.details}>
            <img className={styles.images} src={dp2} alt="admin"/>
            <div className={styles.content}>
              <p className={styles.adminname}>ileb</p>
              <p>Hi im design-ileb7</p>
            </div>
          </div>
        </div>

        <div className={styles.bots}>
          <h3 className={styles.heading}>
            Bots - 2
          </h3>
          <div className={styles.details}>
            <img className={styles.images} src={dp3} alt="bots"/>
            <div className={styles.content}>
              <p className={styles.botname}>FigBot</p>
              <p>Watching the server</p>
            </div>
          </div>

          <div className={styles.details}>
            <img className={styles.images} src={dp1} alt="bots"/>
            <div className={styles.content}>
              <p className={styles.botname}>figmadesignsbot</p>
              <p>Hi im figmadesigns!</p>
            </div>
          </div>
        </div>

        <div className={styles.fans}>
          <h3 className={styles.heading}>
            Fans - 0
          </h3>
          <div className={styles.fanDetails}>
            <h2 className={styles.noUsers}>
              No Users In This Rank
            </h2>
            <h1 className={styles.emoji}>
               :( 
            </h1>
          </div>
        </div>
        
      </main>
    </div>
  )
}

export default Users;