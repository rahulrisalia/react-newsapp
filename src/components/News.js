import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
    };
  }
  async updateNews() {
    this.props.setprogress(15);
    // this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b959fe79458a4f9096f4ef3840001f50&page=${this.state.page}`;
    this.setState({ loading: true });
    this.props.setprogress(40);

    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setprogress(70);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setprogress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b959fe79458a4f9096f4ef3840001f50&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loader: false,
    });
  };

  render() {
    return (
      <>
        <div className="container my-5 pt-4 ">
          <h3>Connecting You to the World</h3>

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row d-flex justify-content-center p-2 ">
                {this.state.articles.map((element) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 p-2"
                      key={element.url}
                    >
                      <NewsItem
                        title={
                          element.title === null
                            ? ""
                            : element.title.slice(0, 80)
                        }
                        discription={element.description}
                        imageUrl={
                          element.urlToImage
                            ? element.urlToImage
                            : "https://image.cnbcfm.com/api/v1/image/107248070-1685461562849-gettyimages-1494571172-0f5a5988_ziuvr3fa.jpeg?v=1686211942&w=1920&h=1080"
                        }
                        url={element.url}
                        author={element.author}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
