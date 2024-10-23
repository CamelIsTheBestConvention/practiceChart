import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.loginContainer}>
      <h1>로그인</h1>
      <form>
        <input
          type="email"
          placeholder="이메일"
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className={styles.inputField}
        />
        <button type="submit" className={styles.button}>
          로그인
        </button>
      </form>
    </div>
  );
}
