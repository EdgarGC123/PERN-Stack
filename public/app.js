class App extends React.Component {
    state = {
        content:[]
    }

    componentDidMount = () => {
        axios.get('/videocontent').then(
            (response) => {
                this.setState({
                    content:response.data
                })
            }
        )
    }

    createVideo = (event) => {
        event.preventDefault();
        axios.post(
            '/videocontent',
            {
                header:this.state.header,
                description:this.state.description,
                link:this.state.video
            }
        ).then(
            (response) => {
                this.setState({
                    content:response.data
                })
            }
        )
    }

    deleteVideo = (event) => {
        axios.delete('/videocontent/' + event.target.value).then(
            (response) => {
                this.setState({
                    content :response.data
                })
            }
        )

    }

    updateVideo = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/videocontent/' + id,
            {
                header:this.state.header,
                description:this.state.description,
                link:this.state.video
            }
        ).then(
            (response) => {
                this.setState({
                    content:response.data,
                    name:'',
                    age:null,
                })
            }
        )
    }

    changeHandler = (event) => {
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }

    render = () => {
        return <div>
            <h2>Create Video</h2>
            <form onSubmit={this.createVideo}>
                <input onChange={this.changeHandler} name = "header" type="text" placeholder="Heading" /><br/>
                <input onChange={this.changeHandler} name = "description" type="text" placeholder="Description" /><br/>
                <input onChange={this.changeHandler} name = "video" type="text" placeholder="Encoded Link"/><br/>
                <input type="submit" value="Create Video" />
            </form>
            <h2>List of Videos</h2>
            <ul>
                {
                    this.state.content.map(
                        (video, index) => {
                            return <li key={index}>
                                <label>Header: </label>
                                {video.header} <br/>
                                <label>Description: </label>
                                {video.description}<br/>
                                <iframe width="791" height="445" src={video.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <button value={video.id} onClick={this.deleteVideo}>DELETE</button>

                                <form id={video.id} onSubmit={this.updateVideo}>
                                    <input onChange={this.changeHandler} name = "header" type="text" defaultValue={video.header} /><br/>
                                    <input onChange={this.changeHandler} name = "description" type="text" defaultValue={video.description} /><br/>

                                    <input onChange={this.changeHandler} name = "video" type="text" defaultValue={video.link}/><br/>
                                    {video.link}
                                </form>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
