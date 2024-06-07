"use client"
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
const page = () =>{
    const categories = [
        {
          title: "Skin & Hair Care",
          subcategories: [
            { name: "Acne", image: "/article.jpg" },
            { name: "Hair Care", image: "/article.jpg" },
            { name: "Hair Fall", image: "/article.jpg" },
            { name: "Hair Loss", image: "/article.jpg" },
            { name: "Healthy Skin", image: "/article.jpg" },
            { name: "Psoriasis", image: "/article.jpg" },
          ],
        },
        {
          title: "Mental Well-Being",
          subcategories: [
            { name: "Addiction", image: "/article.jpg" },
            { name: "Anger Management", image: "/article.jpg" },
            { name: "Anxiety", image: "/article.jpg" },
            { name: "Depression", image: "/article.jpg" },
            { name: "Drinking Addiction", image: "/article.jpg" },
            { name: "Happiness", image: "/article.jpg" },
            { name: "Smoking Addiction", image: "/article.jpg" },
            { name: "Stress", image: "/article.jpg" },
          ],
        },
        {
          title: "Chronic Conditions",
          subcategories: [
            { name: "Condition 1", image: "/article.jpg" },
            { name: "Condition 2", image: "/article.jpg" },
            { name: "Condition 3", image: "/article.jpg" },
            { name: "Condition 4", image: "/article.jpg" },
            { name: "Condition 5", image: "/article.jpg" },
          ],
        },
      ];
      return (
        <div className="container">
          {categories.map((category, index) => (
            <div key={index} className="category cursor-pointer">
              <h2>{category.title}</h2>
              <div className="subcategories">
                {category.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="subcategory">
                    <img src={subcategory.image} alt={subcategory.name} />
                    {/* <div > */}
                    <div className="overlay">
                      <span className="plus"><ControlPointOutlinedIcon/></span>
                    </div>
                    <p>{subcategory.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <style jsx>{`
            .container {
              display: flex;
              flex-direction: column;
              gap: 40px;
            }
            .category {
              margin-bottom: 20px;
            }
            .subcategories {
              display: flex;
              flex-wrap: wrap;
              gap: 20px;
            }
            .subcategory {
              position: relative;
              width: 120px;
              height: 120px;
            }
            .subcategory img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(0, 0, 0, 0.4);
              opacity: 0;
              transition: opacity 0.3s ease;
              opacity: 1;
            }
            .subcategory:hover .overlay {
              opacity: 1;
              z-index:2;
            }
            .plus {
              color: white;
              font-size: 24px;
            }
            .subcategory p {
              text-align: center;
              margin-top: 10px;
            }
            @media (max-width: 768px) {
              .subcategory {
                width: 80px;
                height: 80px;
              }
              .plus {
                font-size: 18px;
              }
            }
            @media (max-width: 480px) {
              .subcategory {
                width: 60px;
                height: 60px;
              }
              .plus {
                font-size: 16px;
              }
            }
          `}</style>
        </div>
      );
}
export default page;