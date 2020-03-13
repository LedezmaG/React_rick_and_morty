import React from 'react';
import '../style/golobal.css'
import Header from '../Component/Header';
import Buacador from '../Component/Buacador';
import CardList from '../Component/CardList';
import PageLoading from '../Component/PageLoading';
import PageError from '../Component/PageError';


class Home extends React.Component{

    state={
        loading: false,
        error: null,
        data: {
            results: []
        },
    }

    componentDidMount (){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        
        try {
            const GetCharactersAPI = await fetch('https://rickandmortyapi.com/api/character');
            const data = await GetCharactersAPI.json();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render(){
        
        if (this.state.loading) {
            return(
                <div className="">
                    <Header />
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <Buacador />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                    <   PageLoading />
                    </div>
                </div>
            ) 
        }
        if (this.state.error) {
            return <PageError error={this.state.error}/>
        }

        return(
            <div className="">
                <Header />
                <div className="row justify-content-center">
                    <div className="col-6">
                        <Buacador />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="row">
                            {this.state.data.results.map(character => (
                                <CardList character={ character } />
                            ))}
                            <button className="btn-lg btn-block" > Loading More</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;