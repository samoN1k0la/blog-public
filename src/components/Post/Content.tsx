import Image from "next/image";
import Link from "next/link";

export default function Content() {
    return (
        <section className="s-content">
            <div className="row">
                <div className="column large-12">
                    <article className="s-content__entry format-standard">

                        {/* Featured Image */}
                        <div className="s-content__media">
                            <div className="s-content__post-thumb">
                                <Image
                                    src="/images/thumbs/single/single-post-1050.jpg"
                                    alt="Post Thumbnail"
                                    width={1050}
                                    height={600}
                                    sizes="(max-width: 2100px) 100vw, 2100px"
                                />
                            </div>
                        </div>

                        {/* Post Title */}
                        <div className="s-content__entry-header">
                            <h1 className="s-content__title s-content__title--post">
                                Hey, This Is A Standard Format Post.
                            </h1>
                        </div>

                        {/* Post Content */}
                        <div className="s-content__primary">
                            <div className="s-content__entry-content">
                                <p className="lead">
                                    Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor...
                                </p>

                                <p>
                                    Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor...
                                </p>

                                {/* Additional Image */}
                                <p>
                                    <Image
                                        src="/images/sample-1050.jpg"
                                        alt="Sample"
                                        width={1050}
                                        height={600}
                                        sizes="(max-width: 2100px) 100vw, 2100px"
                                    />
                                </p>

                                <h2>Large Heading</h2>
                                <p>
                                    Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore...
                                </p>

                                {/* Blockquote */}
                                <blockquote>
                                    <p>
                                        "Lorem ipsum dolor sit amet."
                                    </p>
                                    <cite>Cite Author</cite>
                                </blockquote>

                                <h3>Smaller Heading</h3>
                                <p>
                                    Quidem rerum facilis est et expedita distinctio...
                                </p>

                                {/* Code Block */}
                                <pre>
                                    <code className="language-css">
                                        {`
                                        code {
                                            font-size: 1.4rem;
                                            margin: 0 .2rem;
                                            padding: .2rem .6rem;
                                            background: #F1F1F1;
                                            border: 1px solid #E1E1E1;
                                            border-radius: 3px;
                                        }
                                        `}
                                    </code>
                                </pre>

                                {/* List */}
                                <ul>
                                    <li>Donec nulla non metus auctor fringilla.
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                        </ul>
                                    </li>
                                    <li>Donec nulla non metus auctor fringilla.</li>
                                    <li>Donec nulla non metus auctor fringilla.</li>
                                </ul>
                            </div>

                            {/* Post Meta */}
                            <div className="s-content__entry-meta">
                                <div className="entry-author meta-blk">
                                    <div className="author-avatar">
                                        <Image
                                            src="/images/avatars/user-06.jpg"
                                            alt="John Doe"
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                    <div className="byline">
                                        <span className="bytext">Posted By</span>
                                        <Link href="#">John Doe</Link>
                                    </div>
                                </div>

                                <div className="meta-bottom">
                                    <div className="entry-cat-links meta-blk">
                                        <div className="cat-links">
                                            <span>In</span>
                                            <Link href="#">Frontend</Link>
                                            <Link href="#">Design</Link>
                                            <Link href="#">Work</Link>
                                        </div>
                                        <span>On</span> Oct 5, 2020
                                    </div>

                                    <div className="entry-tags meta-blk">
                                        <span className="tagtext">Tags</span>
                                        <Link href="#">orci</Link>
                                        <Link href="#">lectus</Link>
                                        <Link href="#">varius</Link>
                                        <Link href="#">turpis</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Post Navigation */}
                            <div className="s-content__pagenav">
                                <div className="prev-nav">
                                    <Link href="#" rel="prev">
                                        <span>Previous</span> Tips on Minimalist Design
                                    </Link>
                                </div>
                                <div className="next-nav">
                                    <Link href="#" rel="next">
                                        <span>Next</span> A Practical Guide to a Minimalist Lifestyle.
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

