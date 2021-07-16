
import Parfume from "./Parfume.js";


const magdasParfume = new Parfume (
    "Angel",
    "Mugler",
    "fresh",
    500,
    false,
  );

magdasParfume.startParfume(true);

const content = `
    <main>
      <article>
        <h1> Title: ${magdasParfume.title}</h1>
        <ul>
          <li>author: ${magdasParfume.author}</li>
          <li>type of fragnance: ${magdasParfume.type}</li>
          <li>volume of a bottle: ${magdasParfume.bottleVolume}</li>
          <li>is the parfume open already? ${magdasParfume.open}</li>
        </ul>
      </article>
    </main>

    `;

document.body.innerHTML = content;