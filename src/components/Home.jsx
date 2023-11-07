const Home  = () => {
    return (
        <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {/* <Steps />
              <ProfileCard />
              <Counter /> */}
        {/* <Package /> */}
        {/* <FlashCard /> */}
        {/* <DateChallange /> */}
        {/* <FAQ /> */}
        {/* <EatAndSplit /> */}
        <h1>
          Open to See the code <pre>Shift + .</pre>
        </h1>
        <span style={{ fontSize: "100px" }}>|</span>
        <a
          style={{ textDecoration: "none", fontSize: "50px", color: "white" }}
          href="https://github.com/purnapattela/React_Practice"
          target="_blank"
          rel="noreferrer"
        >
          CODE
        </a>
        <span> 👈 Click here</span>
      </div>
    )
}

export default Home