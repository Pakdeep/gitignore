import React, { Component } from "react";
import NewsComponents from "./NewsComponents";
import articles from "../news";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  articles = articles;
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    // https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=e02bea875d1541a1baabc6778cd557fe   category=${this.state.find}
    let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=e02bea875d1541a1baabc6778cd557fe&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let jsonparsedData = await data.json();
    this.setState({
      articles: jsonparsedData.articles,
      totalResults: jsonparsedData.totalResults,
      loading: false,
    });
  }
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?&country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=e02bea875d1541a1baabc6778cd557fe&page= ${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let jsonparsedData = await data.json();
    this.setState({
      articles: jsonparsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?&country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=e02bea875d1541a1baabc6778cd557fe&page= ${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let jsonparsedData = await data.json(); 
    this.setState({
      articles: jsonparsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    const capitalizeWords = (str) => {
      return(str.charAt(0).toUpperCase() + str.slice(1))
        
    };
    return (
      <div className="container my-3">
        <h1 className="text-center">Top-Headlines</h1>
        <h1 className="text-center text-primary">{capitalizeWords(this.props.category)}</h1>
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((article, index) => {
              return (
                <div className="col-md-4" key={article.url}>
                  <NewsComponents
                    title={article.title}
                    description={article.description}
                    author={article.author}
                    source={article.source.name}                    
                    date={article.publishedAt}
                    imageUrl={
                      article.urlToImage !== null
                        ? article.urlToImage
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtknw0E25wibaSrWcoHvQMIhrWL5Wc-JGMQ&usqp=CAU"
                    }
                    url={article.url}
                  />
                </div>
              );
            })}
        </div>
        {this.state.loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spinner className="text-center" />
          </div>
        )}

        <div className="nextprev" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn next-prev btn-dark btn-lg"
            onClick={this.handlePrev}
          >
            &larr;Prev
          </button>
          <button
            type="button"
            className="btn next-prev btn-dark btn-lg"
            onClick={this.handleNext}
            disabled={this.state.page + 1 > Math.ceil(this.totalResults / 30)}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}
  // News.defaultProps = {
  //   country: "in",
  //   pageSize: 9,
  //   category: "entertainment",
  // };
  // News.propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  // };
export default News;
