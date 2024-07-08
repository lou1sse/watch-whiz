import styles from "./scss/styles.module.scss"

function BackdropComponent({ image }: { image: string }) {
  return (
    <div className={styles.backdropComponent}>
      <div className={styles.backdropComponent__fadedEdges} />
      <img src={image} alt={`${image} Backdrop`} />
    </div>
  )
}

export default BackdropComponent
