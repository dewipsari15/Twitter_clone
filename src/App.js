import React from "react";
import "./App.css";
import {
  AiOutlineTwitter,
  AiTwotoneStar,
  AiOutlinePicture,
  AiOutlineGif,
  AiOutlineAlignLeft,
  AiOutlineSmile,
  AiOutlineDown,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiBell, BiHash, BiHomeCircle } from "react-icons/bi";
import { MdBookmarkBorder, MdMailOutline } from "react-icons/md";
import { BsCardText, BsGear, BsUpload } from "react-icons/bs";
import {
  FaEllipsisH,
  FaRegComment,
  FaRegHeart,
  FaRetweet,
  FaUser,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="SideBarArea">
          <div className="Twitter">
            <AiOutlineTwitter color="#1DA1F2" fontSize="3rem" />
          </div>
          <div className="Icons">
            <BiHomeCircle fontSize="1.8rem" />
            <div>Beranda</div>
          </div>
          <div className="Icons">
            <BiHash fontSize="1.8rem" />
            <div>Jelajahi</div>
          </div>
          <div className="Icons">
            <BiBell fontSize="1.8rem" />
            <div>Notifikasi</div>
          </div>
          <div className="Icons">
            <MdMailOutline fontSize="1.8rem" />
            <div>Pesan</div>
          </div>
          <div className="Icons">
            <MdBookmarkBorder fontSize="1.8rem" />
            <div>Markah</div>
          </div>
          <div className="Icons">
            <BsCardText fontSize="1.8rem" />
            <div>Daftar</div>
          </div>
          <div className="Icons">
            <FaUser fontSize="1.8rem" />
            <div>Profil</div>
          </div>
          <div className="Icons">
            <FaEllipsisH fontSize="1.8rem" />
            <div>Lainnya</div>
          </div>
          <div className="Icons">
            <button className="btn">Tweet</button>
          </div>
        </div>

        <div className="MainArea">
          <div className="Home">
            <div className="home">Beranda</div>
            <div className="star_icon">
              <AiTwotoneStar color="#1DA1F2" fontSize="2rem" />
            </div>
          </div>
          <br />
          <div className="Create-post">
            <div className="Add_text">
              <div className="Profile">
                <img
                  src="/images/dewi.jpg"
                  alt="dewi"
                  style={{ height: "55px", width: "55px", borderRadius: "50%" }}
                />
              </div>
              <input type="post" placeholder="What's happening??" />
            </div>
            <div className="Btns">
              <div className="Icon">
                <div className="Btns_icons">
                  <AiOutlinePicture color="#1DA1F2" fontSize="1.5rem" />
                </div>
                <div className="Btns_icons">
                  <AiOutlineGif color="#1DA1F2" fontSize="1.5rem" />
                </div>
                <div className="Btns_icons">
                  <AiOutlineAlignLeft color="#1DA1F2" fontSize="1.5rem" />
                </div>
                <div className="Btns_icons">
                  <AiOutlineSmile color="#1DA1F2" fontSize="1.5rem" />
                </div>
              </div>
              <div className="Tweets">
                <button className="btns-tweet">Tweet</button>
              </div>
            </div>
          </div>
          <div className="posted_area">
            <div className="proFile">
              <div className="user_Detail">
                <img
                  src="images/dewi.jpg"
                  alt="logo"
                  style={{ height: "30px", width: "30px", borderRadius: "50%" }}
                />
                <div className="user_Name">Dewi Sari</div>
                <div className="user_id">@dewipsari1507</div>
              </div>
              <div className="drop_down">
                <AiOutlineDown fontSize="1rem" />
              </div>
            </div>
            <div className="Qoutes">
              Maybe I'm not that strong, but I'm trying, I'm really trying.
            </div>
            <br />
            <div className="profile_images">
              <img
                src="/images/post.jpg"
                alt="profile"
                style={{ width: "100%", height: "23rem" }}
              />
            </div>
            <div className="Comment_Section">
              <div className="Comment">
                <FaRegComment fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRetweet fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRegHeart fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <BsUpload fontSize="1.4rem" />
              </div>
            </div>
          </div>
          <div className="posted_area">
            <div className="proFile">
              <div className="user_Detail">
                <img
                  src="images/boy-chandra.jpg"
                  alt="logo"
                  style={{ height: "30px", width: "30px", borderRadius: "50%" }}
                />
                <div className="user_Name">Boy Candra</div>
                <div className="user_id">@dsuperboy</div>
              </div>
              <div className="drop_down">
                <AiOutlineDown fontSize="1rem" />
              </div>
            </div>
            <div className="Qoutes">
              Kalau kamu enggak punya teman untuk cerita. Menulislah. Main
              Twitter. Mungkin itu bisa menyelamatkanmu dari banyak hal di dunia
              ini.
            </div>
            <br />
            <div className="Comment_Section">
              <div className="Comment">
                <FaRegComment fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRetweet fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRegHeart fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <BsUpload fontSize="1.4rem" />
              </div>
            </div>
          </div>
          <div className="posted_area">
            <div className="proFile">
              <div className="user_Detail">
                <img
                  src="images/okey.jpg"
                  alt="logo"
                  style={{ height: "30px", width: "30px", borderRadius: "50%" }}
                />
                <div className="user_Name">Okay</div>
                <div className="user_id">@good4yyou</div>
              </div>
              <div className="drop_down">
                <AiOutlineDown fontSize="1rem" />
              </div>
            </div>
            <div className="Qoutes">
              Me: Beli ga ya?
              <br /> Otak: Jangan.
              <br /> Dompet: Jangan.
              <br /> Keluarga: Jangan.
              <br /> Youtuber finance: Jangan.
              <br /> Iklim ekonomi dunia: Jangan.
              <br /> Also me: Sikat laah duit bisa dicari lagi..
            </div>
            <br />
            <div className="Comment_Section">
              <div className="Comment">
                <FaRegComment fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRetweet fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRegHeart fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <BsUpload fontSize="1.4rem" />
              </div>
            </div>
          </div>
          <div className="posted_area">
            <div className="proFile">
              <div className="user_Detail">
                <img
                  src="images/cat-profile.jpg"
                  alt="logo"
                  style={{ height: "30px", width: "30px", borderRadius: "50%" }}
                />
                <div className="user_Name">catty</div>
                <div className="user_id">@cat_auras</div>
              </div>
              <div className="drop_down">
                <AiOutlineDown fontSize="1rem" />
              </div>
            </div>
            <div className="Qoutes">this hug 3 </div>
            <br />
            <div className="profile_images">
              <img
                src="/images/kucing.jpg"
                alt="profile"
                style={{ width: "100%", height: "23rem" }}
              />
            </div>
            <div className="Comment_Section">
              <div className="Comment">
                <FaRegComment fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRetweet fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRegHeart fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <BsUpload fontSize="1.4rem" />
              </div>
            </div>
          </div>
          <div className="posted_area">
            <div className="proFile">
              <div className="user_Detail">
                <img
                  src="images/badut.jpg"
                  alt="logo"
                  style={{ height: "30px", width: "30px", borderRadius: "50%" }}
                />
                <div className="user_Name">Aditya Julian</div>
                <div className="user_id">@Adityajuliann</div>
              </div>
              <div className="drop_down">
                <AiOutlineDown fontSize="1rem" />
              </div>
            </div>
            <div className="Qoutes">
              Kukira benteng pertahananku yang mulai melemah. Ternyata emang
              tekanannya saja yang makin berat.
            </div>
            <br />
            <div className="profile_images">
              <img
                src="/images/kucing2.jpg"
                alt="profile"
                style={{ width: "100%", height: "23rem" }}
              />
            </div>
            <div className="Comment_Section">
              <div className="Comment">
                <FaRegComment fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRetweet fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRegHeart fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <BsUpload fontSize="1.4rem" />
              </div>
            </div>
          </div>
          <div className="posted_area">
            <div className="proFile">
              <div className="user_Detail">
                <img
                  src="images/paper.jpg"
                  alt="logo"
                  style={{ height: "30px", width: "30px", borderRadius: "50%" }}
                />
                <div className="user_Name">a n x i e t y</div>
                <div className="user_id">@ohanxiety</div>
              </div>
              <div className="drop_down">
                <AiOutlineDown fontSize="1rem" />
              </div>
            </div>
            <div className="Qoutes">Me actually:</div>
            <br />
            <div className="profile_images">
              <img
                src="/images/cute.jpg"
                alt="profile"
                style={{ width: "100%", height: "23rem" }}
              />
            </div>
            <div className="Comment_Section">
              <div className="Comment">
                <FaRegComment fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRetweet fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <FaRegHeart fontSize="1.4rem" />
              </div>
              <div className="Comment">
                <BsUpload fontSize="1.4rem" />
              </div>
            </div>
          </div>
        </div>

        <div className="LeftSideBar">
          <div className="Search">
            <AiOutlineSearch
              fontSize="1.5rem"
              style={{ borderRadius: "50%" }}
            />
            <div className="Searc_input">
              <input type="Search" placeholder="Cari di Twitter" />
            </div>
          </div>
          <br />
          <div className="container">
            <div className="Trends">
              <div className="Trends4u">
                <b>Tren Untuk Anda</b>
              </div>
              <div className="setting_icon">
                <BsGear fontSize="1.5rem" color="#1da1f2" />
              </div>
            </div>
            <div className="TrendingWorldWide">
              <div className="TrendingShow">Trending di dunia</div>
              <div className="Tag">#World News</div>
              <div className="TweetPeople">18,2K Tweet</div>
              <div className="Tweets">5.975 orang</div>
            </div>
            <div className="TrendingWorldWide">
              <div className="TrendingShow">Trending di Indonesia</div>
              <div className="Tag">Terkenal itu penting</div>
              <div className="TweetPeople">18,2K Tweet</div>
              <div className="Tweets">5.975 orang</div>
            </div>
            <div className="TrendingWorldWide">
              <div className="TrendingShow">Trending di Indonesia</div>
              <div className="Tag">esemka</div>
              <div className="TweetPeople">18,2K Tweet</div>
              <div className="Tweets">5.975 orang</div>
            </div>
            <div className="TrendingWorldWide">
              <div className="TrendingShow">Keluarga & Hubungan</div>
              <div className="Tag">Selamat Hari Ayah</div>
              <div className="TweetPeople">18,2K Tweet</div>
              <div className="Tweets">5.975 orang</div>
            </div>
            <br />
            <div className="SeeMore">Tampilkan Lebih Banyak</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
