export default function StudyCard({ study }) {
  const {
    title,
    introduction,
    emoji,
    nickname,
    backgroundImage,
    totalPoint,
    daysAfterCreated,
  } = study;

  return (
    <article
      className="study-card"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      <header>
        <span>{emoji || ''}</span>
        <h3>{title}</h3>
      </header>

      <p>{introduction || ''}</p>

      <footer>
        <span> {nickname || ''}</span>
        <span> {totalPoint}</span>
        <span>생성 후 {daysAfterCreated}일</span>
      </footer>
    </article>
  );
}