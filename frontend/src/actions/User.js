import axios from "axios";


    export const getUser = ()=> async(dispatch) => {
    try{
        dispatch({
            type:"GET_USER_REQUEST",
        });
        const {data} = await axios.get("/api/v1/user");

        dispatch({
            type:"GET_USER_SUCCESS",
            payload:data.user,
        });

    }
    catch(error){
    dispatch({
        type:"GER_USER_FAILIURE",
        payload:error.response.data.message,
    })};
    };



    export const login = (email, password)=> async(dispatch) => {
    try{
        dispatch({
            type:"LOGIN_REQUEST",
        });
        const {data} = await axios.post("/api/v1/login",{email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        });

        dispatch({
            type:"LOGIN_SUCCESS",
            payload:data.message,
        });

    }
    catch(error){
    dispatch({
        type:"LOGIN_FAILIURE",
        payload:error.response.data.message,
    })};
    };


    export const logout = ()=> async(dispatch) => {
    try{
        dispatch({
            type:"LOGOUT_REQUEST",
        });
        const {data} = await axios.get("/api/v1/logout");

        dispatch({
            type:"LOGOUT_SUCCESS",
            payload:data.message,
        });

    }
    catch(error){
    dispatch({
        type:"LOGOUT_FAILIURE",
        payload:error.response.data.message,
    })};
    };

    export const loadUser = ()=> async(dispatch) => {
        try{
            dispatch({
                type:"LOAD_USER-REQUEST",
            });
            const {data} = await axios.get("/api/v1/me");
        
            dispatch({
                type:"LOAD_USER_SUCCESS",
                payload:data.user,
            });
        
        }
        catch(error){
        dispatch({
            type:"LOAD_USER_FAILIURE",
            payload:error.response.data.message,
        })}; };
    
    export const updateUser = (name, email, password, skills, about )=> async(dispatch) => {
     
        try{
            dispatch({
                type:"UPDATE_USER-REQUEST",
            });
            const {data}= await axios.put(
            "/api/v1/admin/update",
            {name,email,password,skills, about},

            { headers:{"Content-Type":"application/json"},

            });
          
        
            dispatch({
                type:"UPDATE_USER_SUCCESS",
                payload:data.message,
            });
        
        }
        catch(error){
        dispatch({
            type:"UPDATE_USER_FAILIURE",
            payload:error.response.data.message,
        })};
        };
    
    
    export const addTimeline = 
    (title,description, date )=> async(dispatch) => {
        try{
            dispatch({
                type:"ADD_TIMELINE_REQUEST",
            });

            const {data}= await axios.post(
            "/api/v1/admin/timeline/add",
            {title, description, date},

            { headers:{"Content-Type":"application/json"},

            });
        
        
            dispatch({
                type:"ADD_TIMELINE_SUCCESS",
                payload:data.message,
            });
        
        }
        catch(error){
        dispatch({
            type:"ADD_TIMELINE_FAILIURE",
            payload:error.response.data.message,
        })};
        };
    
        export const deleteTimeline = (id)=> async(dispatch) => {
            try{
                dispatch({
                    type:"DELETE_TIMELINE_REQUEST",
                });
                const {data}= await axios.delete(`/api/v1/admin/timeline/${id}`,);
                dispatch({
                    type:"DELETE_TIMELINE_SUCCESS",
                    payload:data.message,
                });
            
            }
            catch(error){
            dispatch({
                type:"DELETE_TIMELINE_FAILIURE",
                payload:error.response.data.message,
            })};
            };


    export const addProject = 
    (url,title,image,description,techStack)=> async(dispatch) => {
        try{
            dispatch({
                type:"ADD_PROJECT_REQUEST",
            });

            const {data}= await axios.post(
            "/api/v1/admin/project/add",
            {url, title, image, description, techStack},
            { headers:{"Content-Type":"application/json"},

            });
          
        
            dispatch({
                type:"ADD_PROJECT_SUCCESS",
                payload:data.message,
            });
        
        }
        catch(error){
        dispatch({
            type:"ADD_PROJECT_FAILIURE",
            payload:error.response.data.message,
        })};
        };
    
        export const deleteProject = (id)=> async(dispatch) => {
            try{
                dispatch({
                    type:"DELETE_PROJECT_REQUEST",
                });
                const {data}= await axios.delete(`/api/v1/admin/project/${id}`,);
                dispatch({
                    type:"DELETE_PROJECT_SUCCESS",
                    payload:data.message,
                });
            
            }
            catch(error){
            dispatch({
                type:"DELETE_PROJECT_FAILIURE",
                payload:error.response.data.message,
            })};
            };

            export const contactUs = 
            (name, email, message)=> async(dispatch) => {
                try{
                    dispatch({
                        type:"CONTACT_US_REQUEST",
                    });
        
                    const {data}= await axios.post(
                    "/api/v1/contact",
                    {name, email, message},
                    { headers:{"Content-Type":"application/json"},
        
                    });
                  
                
                    dispatch({
                        type:"CONTACT_US_SUCCESS",
                        payload:data.message,
                    });
                
                }
                catch(error){
                dispatch({
                    type:"CONTACT_US_FAILIURE",
                    payload:error.response.data.message,
                })};
                };