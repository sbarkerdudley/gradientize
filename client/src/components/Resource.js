"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class Resource extends react_1.Component {
    constructor(props) {
        super(props);
        this.baseURL = 'https://api.spotify.com/v1';
        this.state = {
            items: [],
            loading: true,
            hasError: false,
        };
    }
    componentDidMount() {
        try {
            this.props.action(this.props.path)
                .then(response => {
                console.log(response);
                return response;
            })
                .then(response => response.data)
                .then(data => {
                if (data.items) {
                }
                this.setState(state => (Object.assign(Object.assign({ data }, state), { loading: false, hasError: false })));
            })
                .catch(err => { throw new Error(err); });
        }
        catch (error) {
            console.log(error);
            this.setState(state => (Object.assign(Object.assign({}, state), { loading: false, hasError: true })));
        }
    }
    // componentDidMount() {
    //   if (Spotify.checkAuth()) {
    //     Spotify.getUserProfile()
    //       .then(results => results.data)
    //       .then(data => {
    //           this.setState(state => ({
    //             ...state,
    //             data
    //           }))
    //           console.log(this.state);
    //           console.log(data);
    //       })
    //   } else {
    //     this.setState({
    //       error: true,
    //     })
    //   }
    // }
    render() {
        return this.props.render(this.state);
    }
}
exports.default = Resource;
