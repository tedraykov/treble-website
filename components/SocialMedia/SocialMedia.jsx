import styles from './SocialMedia.module.css'

const SocialMedia = (props) => {
  return (
    <>
      <ul className={styles.container}>
        <li>
          <button className={styles.instagram}>
            <a href='https://www.instagram.com/alttreble/'><i className='fa fa-instagram' /></a>
          </button>
        </li>
        <li>
          <button className={styles.facebook}>
            <a href=''>
              <i className='fa fa-facebook' />
            </a></button>
        </li>
        <li>
          <button className={styles.youtube}>
            <a href=''>
              <i className='fa fa-youtube' />
            </a>
          </button>
        </li>
      </ul>
    </>
  )
}

export default SocialMedia