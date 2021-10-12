import React from "react";
import HeroSelection from "./HeroSelection"
import RecruitList from "./RecruitList"



function Home({ isLoadedHeroes, heroArray, heroSelectionArray, onAddToTeamBtnClick, onDisselectBtnClickInSelection, heroArrayParse, setHeroArrayParse, currentTeam }) {


  return (
    <div className="HomeContainer">
      {
        heroSelectionArray.length === 0 ?
        <h1 className="home-h2">Please start selecting your heroes to {currentTeam}</h1>
        :
        
        

        <HeroSelection heroSelectionArray={heroSelectionArray}
                       onAddToTeamBtnClick={onAddToTeamBtnClick}
                       onDisselectBtnClickInSelection={onDisselectBtnClickInSelection}
                       currentTeam={currentTeam}
                      
                        />

      }
        
        <RecruitList isLoadedHeroes={isLoadedHeroes} heroArray={heroArray} heroArrayParse={heroArrayParse} setHeroArrayParse={setHeroArrayParse}/>

    </div>
  );
}

export default Home;