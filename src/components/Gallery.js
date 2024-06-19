export function Profile() {
    let link = "https://i.imgur.com/QIrZWGIs.jpg";
    let altText = "Alan L.Hart";
  return <img src={link} alt={altText} />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Few Profile picturs</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
