<template>
  <main>
    <div class="home-page">
      <div class="left">
        <h1>Real Estate advice for real locals.</h1>
        <p>
          In expecting display, thought. Rationally and at it's of headline
          proper than met harmonics; Sign the had no made reached are desk mars
          might to first.
        </p>
        <button>Get Started</button>
      </div>
      <div class="right">
        <img src="../assets/duplex.png" alt="luxury-real-estate" />
      </div>
    </div>
    <div class="wave">
      <div class="ninety">
        <h1>90%</h1>
        <p>Already inhabited</p>
      </div>
      <div class="fifty">
        <h1>50k</h1>
        <p>Satisfied Customers</p>
      </div>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
}

.home-page {
  position: relative;
  display: flex;
  //   flex-direction: column;
  background: var(--grey);
  //   height: 80vh;
}

.left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--light);
  gap: 25px;
  padding: 9.2rem;
  margin-top: -10rem;
}

.left h1 {
  width: 450px;
  line-height: 3.5rem;
  letter-spacing: 0.1rem;
  font-size: 40px;
}

.left p {
  font-size: 12px;
  line-height: 1.5rem;
  word-spacing: 0.04rem;
  width: 300px;
}

.right {
  flex: 3;
  overflow: hidden;
  //   border: 4px solid red;
}

.right img {
  object-fit: cover;
  //   width: 130%;
  height: 100%;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.wave .shape-fill {
  fill: #ffffff;
}

.ninety {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 2px solid red;
  border: 0;
  z-index: 1;
  left: 35rem;

  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transform: skew();
}

.ninety h1 {
  color: #0a47f5;
  margin-top: 3rem;
  padding: 5px;
}

.ninety p {
  color: #acacac;
  text-align: left;
  margin-top: 1rem;
  font-size: 14px;
  width: 100px;
  line-height: 12px;
  padding: 5px;
}

.fifty {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 2px solid red;
  border: 0;
  z-index: 1;
  left: 46rem;

  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transform: skew();
}

.fifty h1 {
  color: #0a47f5;
  margin-top: 3rem;
  padding: 5px;
}

.fifty p {
  color: #acacac;
  text-align: left;
  margin-top: 1rem;
  font-size: 14px;
  width: 100px;
  line-height: 12px;
  padding: 5px;
}
</style>
