import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="avatar" fill />
        </div>
        Jale Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Jale Doe" />
          <label>Email</label>
          <input type="email" name="email" placeholder="jaledoe@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
          <label>Phone</label>
          <input type="number" name="phone" placeholder="+1234567" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="Istanbul" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
