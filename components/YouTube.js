export default function YouTube({ id }) {
  return (
    <div>
      <iframe
        width="660" 
        height="350"
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
      />
    </div>
  );
}