import React, { Component } from 'react';
export default class Employee1 extends Component {
    userData;
   
    constructor(props) {
        super(props);
        this.handleonChange = this.handleonChange.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Ename: '',
            Eemail: '',
            Ephone: '',Eid:"",Esal:"",Edesi:"",EEdu:"",Eexp:"",Ecity:"",Eskills:"",Ecompany:"",EDob:""
        }
    }
    
    // Form Events
    handleonChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()
        console.log(this.state);
    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                Ename: this.userData.Ename,
                Eemail: this.userData.Eemail,
                Ephone: this.userData.Ephone,
                Eid:this.userData.Eid,
                Esal:this.userData.Esal,
                Edesi:this.userData.Edesi,
                EEdu:this.userData.EEdu,
                Eexp:this.userData.Eexp,
                Ecity:this.userData.Ecity,
                Eskills:this.userData.Eskills,
                Ecompany:this.userData.ECompany,
                EDob:this.userData.EDob
            })
        } else {
            this.setState({
                Ename: '',
                Eemail: '',
                Ephone: '',Eid:"",Esal:"",Edesi:"",EEdu:"",Eexp:"",Ecity:"",Eskills:"",Ecompany:"",EDob:""
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
    
    render() {
        return (
            <div className="container" style={{backgroundColor:'black',backgroundSize:'cover'}}>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label style={{color:"white"}}>EName</label>
                        <input type="text" className="form-control" value={this.state.name} name="Ename" onChange={this.handleonChange} />
                    </div>
                    <div className="form-group">
                        <label style={{color:"white"}}>EEmail</label>
                        <input type="email" className="form-control" value={this.state.email} name="Eemail" onChange={this.handleonChange} />
                    </div>
                    <div className="form-group">
                        <label style={{color:"white"}}>EPhone</label>
                        <input type="tel" className="form-control" value={this.state.phone} name=" Ephone" onChange={this.handleonChange} />
                    </div>
                    {/*  */}
                    <div className="form-group">
                        <label style={{color:"white"}}>EId</label>
                        <input type="text" className="form-control" value={this.state.name} name="Eid" onChange={this.handleonChange} />
                    </div>
                    <div className="form-group">
                        <label style={{color:"white"}}>ESalary</label>
                        <input type="text" className="form-control" value={this.state.email} name="Esal" onChange={this.handleonChange} />
                    </div>
                    <div className="form-group">
                        <label style={{color:"white"}}>EDesignation</label>
                        <input type="text" className="form-control" value={this.state.phone} name="Edesi" onChange={this.handleonChange} />
                    </div>
                    {/*  */}
                    <div className="form-group">
                        <label style={{color:"white"}}>EEducation</label>
                        <input type="text" className="form-control" value={this.state.name} name="EEdu" onChange={this.handleonChange} />
                    </div>
                    <div className="form-group">
                        <label style={{color:"white"}}>EExperirnce</label>
                        <input type="text" className="form-control" value={this.state.email} name="Eexp" onChange={this.handleonChange} />
                    </div>
                    <div className="form-group">
                        <label style={{color:"white"}}>ECity</label>
                        <input type="text" className="form-control" value={this.state.phone} name="Ecity" onChange={this.handleonChange} />
                    </div>
                    {/*  */}
                    <div className="form-group">
                        <label style={{color:"white"}}>ESkills</label>
                        <input type="text" className="form-control" value={this.state.name} name="Eskills" onChange={this.handleonChange} />
                    </div>
                    <div className="form-group">
                        <label style={{color:"white"}}>ECompany</label>
                        <input type="text" className="form-control" value={this.state.email} name="Ecompany" onChange={this.handleonChange} />
                    </div>
                    <div className="form-group">
                        <label style={{color:"white"}}>EDOB</label>
                        <input type="date" className="form-control" value={this.state.phone} name="EDob" onChange={this.handleonChange} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}





