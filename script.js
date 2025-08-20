function createThumbnail(link, imageSrc, title) {
  const thumbnailDiv = document.createElement('div');
  const thumbnailGrid = document.getElementById('thumbnailGrid');
  thumbnailDiv.className = 'thumbnail';

  const anchor = document.createElement('a');
  anchor.href = link;

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = title;

  const h1 = document.createElement('h1');
  const textNode = document.createTextNode(title);

  h1.appendChild(textNode);
  anchor.appendChild(h1);
  anchor.appendChild(img);
  thumbnailDiv.appendChild(anchor);
  thumbnailGrid.appendChild(thumbnailDiv);
}

function createCover() {
  const coverThumbnail = { link: '#', imageSrc: 'assets/main.jpg', title: 'Video 1' };
  const featuredCover = document.getElementById('featuredCover');

  const anchor = document.createElement('a');
  anchor.href = coverThumbnail.link;

  const img = document.createElement('img');
  img.src = coverThumbnail.imageSrc;
  img.alt = coverThumbnail.title;

  anchor.appendChild(img);
  featuredCover.appendChild(anchor);
}

createCover();
createThumbnail('#', 'assets/10.jpg', 'How To Train Your Dragon (2025)');
createThumbnail('#', 'assets/01.jpg', 'Bad Boys');
createThumbnail('#', 'assets/02.jpg', 'IF (2024)');
createThumbnail('#', 'assets/03.png', 'One Piece');
createThumbnail('#', 'assets/04.png', 'Demon Slayer S4');
createThumbnail('#', 'assets/05.jpeg', 'Despicable Me 4');
createThumbnail('#', 'assets/06.jpg', 'Movie Name');
createThumbnail('#', 'assets/09.jpg', 'Sakamoto Days');
createThumbnail('#', 'assets/07.jpg', 'Placeholder 1');
createThumbnail('#', 'assets/08.jpg', 'Placeholder 2');
createThumbnail('#', 'assets/07.jpg', 'Placeholder 1');
createThumbnail('#', 'assets/08.jpg', 'Placeholder 2');
createThumbnail('#', 'assets/07.jpg', 'Placeholder 1');
createThumbnail('#', 'assets/08.jpg', 'Placeholder 2');
createThumbnail('#', 'assets/07.jpg', 'Placeholder 1');
createThumbnail('#', 'assets/08.jpg', 'Placeholder 2');
