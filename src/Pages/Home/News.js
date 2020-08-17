import React from "react";

export default function News() {
  return (
    <div className="container" style={{ clear: "both" }}>
      <div className="news">
        <div className="news-menu">
          <ul>
            <li>
              <a href>Điện Ảnh 24h</a>
              <a href>Review</a>
              <a href>Khuyến Mãi</a>
            </li>
          </ul>
        </div>
        <div className="news-content">
          <div className="news-content1">
            <div className="row">
              <div className="col-6">
                <div className="content1">
                  <img src="./img/news1.png" alt="" />
                  <p className="newTitle">
                    Màu sắc ảnh hưởng đến quá trình xem phim của bạn như thế
                    nào?
                  </p>
                  <p className="newDescription">
                    Màu vàng rực rỡ mang lại cảm giác tươi vui. Màu đỏ gợi cảm
                    giác bạo lực, quyết liệt còn màu ngọc lam gợi cảm giác trầm
                    lắng của nội tâm nhân vật. Bất cứ màu sắc nào bạn nhìn thấy
                    khi xem phim đều không phải là sự xuất hiện ngẫu nhiên. Đó
                    đều là sự tính toán kỹ lưỡng của các nhà làm phim.
                  </p>
                  <div className="news-icon">
                    <i className="far fa-thumbs-up" />
                    <p>0</p>
                    <i className="far fa-comment" />
                    <p>0</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="content1">
                  <img src="./img/news2.png" alt="" />
                  <p className="newTitle">
                    Lên nhầm xe của kẻ biến thái, Phương Anh Đào vô tình trở
                    thành nhân chứng bị truy sát
                  </p>
                  <p className="newDescription">
                    Trailer và poster đầu tiên của Bằng Chứng Vô Hình giới thiệu
                    hai cuộc sống với gam màu đối lập của cô gái mù Thu (Phương
                    Anh Đào) và tên tội phạm biến thái Lê (Quang Tuấn), đồng
                    thời kích thích sự tò mò của khán giả về một cuộc săn đuổi
                    có một không hai giữa họ.
                  </p>
                  <div className="news-icon">
                    <i className="far fa-thumbs-up" />
                    <p>0</p>
                    <i className="far fa-comment" />
                    <p>0</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="content1">
                  <img src="./img/news3.png" alt="" />
                  <p className="newTitle">
                    8 bộ phim chất lượng nhất của David Fincher
                  </p>
                  <p className="newDescription">
                    Nếu bạn xem phim nhiều nhưng chả mấy khi để ý đến người đã
                    tạo ra nó thì hẳn David Fincher sẽ là một cái tên cực kỳ lạ
                    lẫm. Tuy nhiên, vị này chính là một trong những đạo diễn tài
                    năng nhất thế giới ở thời điểm hiện tại. Để so sánh ông với
                    Christopher Nolan thì đúng là kẻ tám lạng người nửa cân.
                  </p>
                  <div className="news-icon">
                    <i className="far fa-thumbs-up" />
                    <p>0</p>
                    <i className="far fa-comment" />
                    <p>0</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="content1">
                  <img src="./img/news4.png" alt="" />
                  <p className="newTitle">
                    Kỹ thuật Zoom và Dolly tạo ra những hiệu ứng gì trong phim?
                  </p>
                  <p className="newDescription">
                    Thay đổi phối cảnh và di chuyển qua không gian chập hẹp bằng
                    dolly và zoom là một cách hiệu quả để các nhà làm phim
                    truyền tải thông điệp bằng hình ảnh cho khán giả, nó không
                    chỉ tạo ra các hiệu ứng về mặt thị giác mà còn tác động lên
                    cảm xúc khi xem phim.
                  </p>
                  <div className="news-icon">
                    <i className="far fa-thumbs-up" />
                    <p>0</p>
                    <i className="far fa-comment" />
                    <p>0</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="content2">
                  <img src="./img/news5.jpg" alt="" />
                  <p className="newTitle">
                    Điểm mặt những phim Việt công phá phòng chiếu trong năm
                    2020!
                  </p>
                </div>
                <div className="content2">
                  <img src="./img/news6.jpg" alt="" />
                  <p className="newTitle">
                    Scary Stories In The Dark đi vào sản xuất phần tiếp theo.
                  </p>
                </div>
                <div className="content2">
                  <img src="./img/news7.png" alt="" />
                  <p className="newTitle">
                    Stormbreaker và Mjolnir: Loại vũ khí nào của Thor mạnh hơn?
                  </p>
                </div>
                <div className="content2">
                  <img src="./img/news8.jpg" alt="" />
                  <p className="newTitle">
                    [Cập nhật] Rạp phim vẫn tạm ngưng hoạt động.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-button">
            <button className="btn btn-outline-danger classButton ">
              XEM THÊM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
