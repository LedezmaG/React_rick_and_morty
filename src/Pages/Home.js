import React from 'react';
import Header from '../Component/Header';
import Buacador from '../Component/Buacador';
import CardList from '../Component/CardList';
import PageLoading from '../Component/PageLoading';
import PageError from '../Component/PageError';


class Home extends React.Component{

    state={
        message: `Hi! i'm a message`,
        loading: true,
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
            this.setState({ loading: true, data: data });
        } catch (error) {
            this.setState({ loading: true, error: error });
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
                        <ul className="row">
                            {this.state.data.results.map(character => (
                                <il className="">
                                    <CardList character={ character } />
                                </il>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;