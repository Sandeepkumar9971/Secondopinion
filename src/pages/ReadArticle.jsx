"use client"
const ReadArticle = () => {
  return (
    <div>
      <div style={{
        height: '600px',
        width: '100%',
        background: '#000',
        backgroundImage: "url('/story.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}></div>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
      }}>
        <div className="article-section">
          <div className="article-content shadow-lg">
            <h1 className="text-3xl">7 Health Benefits of Dates</h1>
            <div className="author-info">
              <img src="/story.jpg" alt="Author" className="author-image" />
              <div>
                <a href="#" className="author-name">Dr. Prabha Acharya</a>
                <p className="publish-date">24 December, 2021</p>
              </div>
            </div>
            <p className="article-text">
              Dates are the sweet and chewy fruit of the date palm tree (Phoenix dactylifera). Dates have been the staple food of the Middle East for thousands of years. They are low in fat and protein but rich in sugars, mainly fructose and glucose. They are a high source of energy.
              Dates are packed with lots of nutrients such as vitamins and minerals and are cholesterol-free, gluten-free, and fat-free. Date seeds contain higher protein and fat as compared to the flesh. It is also high in dietary fibre, phenolics (antiseptic and disinfectant in nature), and antioxidants (compounds that protect your cells from the damage caused by free radicals).
              Read on to learn more about the health benefits of dates.
            </p>

          <div className="mt-5">
          <h3 className="text-xl">7 Health Benefits of Dates</h3>
          <div className="mt-5">
          <h4 className="text-xl">1. Good Source of Energy And Highly Nutritious</h4>
          <p className="article-text">Dates are a powerhouse of nutrition. They contain B vitamins, vitamin K, calcium, iron, magnesium, potassium, zinc, and manganese. They are not just loaded with sugar or empty calories, they are an excellent source of energy as well. </p>
          </div>
          <div className="mt-5">
          <h4 className="text-xl">2. High in Antioxidants</h4>
          <p className="article-text">Dates can be a good source of antioxidants, mainly carotenoids (any of a class of mainly yellow, orange, or red fat-soluble pigments) and phenolics. Antioxidants protect your cells from free radicals, which are unstable molecules that may cause harmful reactions in your body and lead to disease. </p>
          </div>
          <div className="mt-5">
          <h4 className="text-xl">3. Help in Digestion And Are An Excellent Source of Fibre</h4>
          <p className="article-text">Dates are a powerhouse of nutrition. They contain B vitamins, vitamin K, calcium, iron, magnesium, potassium, zinc, and manganese. They are not just loaded with sugar or empty calories, they are an excellent source of energy as well. </p>
          </div>
          <div className="mt-5">
          <h4 className="text-xl">4. Improves Bone Health</h4>
          <p className="article-text">Dates can prevent potential bone-related disorders like osteoporosis (a condition that causes bones to become weak and brittle) as they contain several minerals, including phosphorus, potassium, calcium, and magnesium.</p>
          </div>
          <div className="mt-5">
          <h4 className="text-xl">5. Lower Cholesterol</h4>
          <p className="article-text">Dates are rich in potassium, which reduces the risk of stroke and other heart-related problems. They also have properties to reduce LDL cholesterol (also called bad cholesterol).</p>
          </div>
          <div className="mt-5">
          <h4 className="text-xl">6. Maintain Healthy Skin And Hair</h4>
          <p className="article-text">Dates can increase skin elasticity as they are abundant in vitamin C and D, which boost collagen (the main structural protein in your body) production. They are also extremely rich in antioxidants, especially tannins, which prevent cell damage and oxidation and help reduce inflammation.</p>
          </div>
          </div>
          </div>
        </div>



        <div className="popular-articles-section shadow-lg">
          <h2 className="text-xl ml-4 mt-4">Popular Articles</h2>
          <div className="flex flex-col gap-2 mt-2">
          <div className="popular-article border">
            <img src="/story.jpg" alt="Popular Article" />
            <p>The Most Frequently Asked Questions on Oral Health</p>
          </div>
          <div className="popular-article border">
            <img src="/story.jpg" alt="Popular Article" />
            <p>11 Ways to Lose Weight Without Spending Much Money</p>
          </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          body {
            scroll-behavior: smooth;
          }
    .article-text {
            width: 60ch;
            word-break: break-word;
            line-height: 1.6; /* Adjust this value for desired line spacing */
          }
          .article-section {
            display: flex;
            flex: 3;
            flex-direction: column;
            margin-top: -150px;
            padding:5%;
          }

          .article-content {
            padding: 20px;
            background-color:#fff
          }

          .author-info {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }

          .author-image {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
          }

          .author-name {
            font-size: 1.2em;
            font-weight: bold;
            color: #333;
          }

          .popular-articles-section {
            flex: 2;
            background-color:#fff
          }

          .popular-article {
            display: flex;
            padding:20px;
            align-items: center;
           
          }

          .popular-article img {
            width: 80px;
            height: 80px;
            margin-right: 10px;
          }

          .popular-article p {
            flex-grow: 1;
          }

          @media (min-width: 768px) {
            .container {
              flex-direction: row;
              justify-content: space-between;
            }

            .article-section,
            .popular-articles-section {
              width: 48%;
            }
          }

          @media (min-width: 1024px) {
            .container {
              max-width: 1024px;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ReadArticle