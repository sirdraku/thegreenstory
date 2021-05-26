import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Comments from "../../components/Comments"
import ContentTypePagination from "../../components/ContentTypePagination"
import AuthorBio from "../../components/AuthorBio"
import PostMeta from "../../components/PostMeta"
import PostCategories from "../../components/PostCategories"
import FeaturedMedia from "../../components/FeaturedMedia"
import {Helmet} from "react-helmet";

import {
  FacebookShareButton, TwitterShareButton
} from 'react-share';

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const post = ({ data }) => {
  const { nextPage, previousPage, page } = data
  const {
    title,
    content,
    featuredImage,
    categories,
    excerpt,
    databaseId,
    author,
    date,
    uri
  } = page  
  let clearExerpt = excerpt.replace(/<\/?[^>]+(>|$)/g, "");
  if(clearExerpt.length > 10) {
    clearExerpt = clearExerpt.substring(0,80)
  }
  let clearTitle = title.replace(/<\/?[^>]+(>|$)/g, "");
  if(clearExerpt.length > 10) {
    clearTitle = clearTitle.substring(0,30)
  }
  let makeTitleArr = clearTitle.split(" ");
  let addTitleSuffix = [...makeTitleArr, "..."];


  let makeExerptArr = clearExerpt.split(" ");
  let addExerptSuffix = [...makeExerptArr, "..."];
  return (
    <Layout
    className={`post-template-default single single-post postid-${databaseId} single-format-standard wp-embed-responsive singular has-post-thumbnail has-single-pagination showing-comments footer-top-visible customize-support`}
    >
      <Seo title={addTitleSuffix.join(" ")} description={addExerptSuffix.join(" ")} />
      <Helmet>
          <meta http-equiv="refresh" content={`5;url=https://cuteanimalplanet.com${uri}`} />
      </Helmet>
      <article
        className={`post-${databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
        id={`post-${databaseId}`}
      >
         <FeaturedMedia image={featuredImage} />
         
        <header className="entry-header header-footer-group">
          <div className="entry-header-content">
            <PostCategories categories={categories} />
            <h1
              className="entry-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
             <PostMeta title={title} author={author} date={date} />
              <FacebookShareButton
                url={`/${uri}`}
                quote={addTitleSuffix.join(" ")}>
                  <span>Facbook</span>
              </FacebookShareButton>

              <TwitterShareButton
                url={`/${uri}`}
                title={addTitleSuffix.join(" ")}>
                  <span>Twitetr</span>
              </TwitterShareButton>
            <div
              className="intro-text section-inner max-percentage small"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
           
          </div>
        </header>
     

        <div className="post-inner thin">
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        
        <div className="section-inner">
          <AuthorBio author={author} />
          <div className="s9-widget-wrapper" />
          <ContentTypePagination
            previousPage={previousPage}
            nextPage={nextPage}
            contentType={"Post"}
          />
          <Comments />
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      ...PostContent
    }
    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`

export default post;