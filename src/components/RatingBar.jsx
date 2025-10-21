
function RatingBar({ rate }) {
  const totalStars = 10;
  const filledStars = rate || 0; // Upewniamy się, że rate nie jest undefined

  // Tworzymy tablicę gwiazdek
  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < filledStars) {
      // Dodajemy wypełnioną gwiazdkę
      stars.push(<span key={i}>⭐</span>);
    } else {
      // Dodajemy pustą gwiazdkę
      stars.push(<span key={i}>☆</span>);
    }
  }

  return (
    <div className="my-2" style={{ fontSize: '1.2rem' }}>
      {stars}
    </div>
  );
}

export default RatingBar;