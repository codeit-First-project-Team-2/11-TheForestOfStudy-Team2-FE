import '../styles/StudyCard.css';

export default function StudyCard({ study }) {
  const {
    title,
    nickname,
    introduction,
    emoji,
    backgroundImage,
    totalPoint,
    daysAfterCreated,
  } = study;

  return (
    <article
      className="study-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="card-overlay">
        <header className="card-header">
          <span className="emoji">{emoji}</span>
          <h3 className="title">{title}</h3>
        </header>

        <p className="intro">{introduction}</p>

        <footer className="card-footer">
          <span className="nickname">{nickname}</span>
          <span className="point"> {totalPoint}</span>
          <span className="date">{daysAfterCreated}일 전</span>
        </footer>
      </div>
    </article>
  );
}