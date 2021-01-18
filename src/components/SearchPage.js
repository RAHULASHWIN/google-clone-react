import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch"
import Response from "./Responce";
import { Link } from "react-router-dom";
import Search from "../pages/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
   const {data} = useGoogleSearch(term);

  //const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__optionsLeft">
            <div className="searchPage__options">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage__options">
              <DescriptionIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage__options">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage__options">
              <LocalOfferIcon />
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className="searchPage__options">
              <RoomIcon />
              <Link to="/maps">maps</Link>
            </div>
            <div className="searchPage__options">
              <MoreVertIcon />
              <Link to="/more">more</Link>
            </div>
          </div>

          <div className="searchPage__optionsRight">
            <div className="searchPage__options">
              <Link to="/settings">Settings</Link>
            </div>
            <div className="searchPage__options">
              <Link to="/tools">Tools</Link>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result ">
              <a className="searchPage__resultLink" href={item.link}>
              {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img className="searchPage__resultImage" src={ item.pagemap?. cse_image[0]?.src} alt="" />
              )}

              {item.displayLink}</a>
              <a className="searchPage_-result Title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p
              className="searchPage__result Snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
