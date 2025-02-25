import Image from 'next/image';
import Link from 'next/link';

const ContentSection = () => {
  const posts = [
    {
      title: "Need Web Hosting for Your Websites?",
      author: "StyleShout",
      category: "Site Partner",
      image: "/images/thumbs/masonry/macbook-600.jpg",
      link: "https://www.dreamhost.com/r.cgi?287326",
      excerpt: "Need hosting? We highly recommend DreamHost...",
    },
    {
      title: "Just a Normal Simple Blog Post.",
      author: "Naruto Uzumaki",
      category: ["Design", "Photography"],
      image: "/images/thumbs/masonry/woodcraft-600.jpg",
      link: "single-standard.html",
      excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt...",
    }
  ];

  return (
    <section className="s-content s-content--no-top-padding">
      <div className="s-bricks">
        <div className="masonry">
          <div className="bricks-wrapper h-group">
            {posts.map((post, index) => (
              <article key={index} className="brick entry" data-aos="fade-up">
                <div className="entry__thumb">
                  <Link href={post.link} className="thumb-link">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      layout="responsive"
                    />
                  </Link>
                </div>
                <div className="entry__text">
                  <div className="entry__header">
                    <h1 className="entry__title">
                      <Link href={post.link}>{post.title}</Link>
                    </h1>
                    <div className="entry__meta">
                      <span className="byline">
                        By: <span className="author"><Link href="#0">{post.author}</Link></span>
                      </span>
                      <span className="cat-links">
                        {Array.isArray(post.category) ? (
                          post.category.map((cat, i) => (
                            <Link key={i} href="#0">{cat}</Link>
                          ))
                        ) : (
                          <Link href="#0">{post.category}</Link>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>{post.excerpt}</p>
                  </div>
                  <Link className="entry__more-link" href={post.link}>Read More</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
