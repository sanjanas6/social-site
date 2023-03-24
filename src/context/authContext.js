import {createContext , useState , useEffect} from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser , setCurrentUser]  = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
   
    const login = () =>{
     setCurrentUser({id:1,name:"tannu",profilePic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAAAZlBMVEX///8AAACvr6/4+Pjk5OT09PQ1NTW2trbDw8Obm5vh4eHt7e2Li4vn5+dRUVHw8PDJyclAQEBvb28lJSXW1tYNDQ0ZGRlFRUVZWVmoqKgfHx+Dg4N4eHhkZGSioqJpaWkuLi6Tk5P8WHVSAAAE6UlEQVR4nO1ba5eiMAwVC4iIgPJQfIzy///krqvTpIrS0Kaes6f34wzQ2zZJk9s4m3l4eHh4eHh4eHh4eHj8hxBhmSwWi6RMxbep/EIU5XETV01wQ1PFm2NSfJ9c2J2DV+y79Kus0m01wOqG6vI9ZvXpDak7TuVXWBVZ+5HWX2PLVu5ple92EKN1vmS9BqsbMqesoosmrSA4F+5oid2QNbVt2wz8PY5c0VpvnsfeZ11Sh+uwLrts/0LMVcSIn8btQrwkUTh/eqBywkqoAf6cDDyTqM/sXZxLvWJUyfCQolSC25GfVqmM996mxRE/OLSoVqHY/PLjoz/YBkNmXlvCIuClvfDSqtFQ89GnF+jpmpUXCk4LjccTRz6Jdmar9QLKhDhNH5Zrp3e6RLl8I+ejtaLPHq0wn0v2E9wLHJgt5UGbop/vlTLHyLkSC9iTM+Gt7YTJ0DAnhC4ABLGOiRfMnPQahDAmXjJFoLm8DC4ND61o4obA9vMYfkoOXneAu/CckdKAW9r3a1lpUtxFH3I/rrRCIpQpG49Dyjxvtya9t5Lh+HMeORVL6Y402SHaO+K1o/EqmNdL7uOGlhmsd7y8pD8eaP6YMvsj5Pa0Axje40lZISuk+Tsc3DQ/1ob8/on0GhS4TKUHpIWk1+Rxv+GhBYGCdNDBscqVSEM1SNlIKNW4KjXQJghyw1qKYXz6HExdf0tg8/Uq4SlAxaDuUVTAK4wFN2j2ugUk1AQHPlpY0tKLrUjR4Tkc71ghVU7HiiFGBBumYH9HBwNdxwfC0/jhpDWboZGuY7ZfIL085qWF5IbRgJSiOTTsF1hZgEb75PoJvpRxIJQrd0Ond0a2UmRyrhMbI1VuWeKfoSI66tSHeEXfB7Am/RfV8nnU+ueqPuKElip/33DIs7KIhJgJERV1v3++ydVRrq2gDF7R5pftJT8M/MfhXXIyduWO+DpbrRvCfJzRP+SO2yii4zin4OOFGw/qXotX5sgVH0hPQwY+hHbrjlm4HOeD18yRiS2u41wUVDy6hIrwpQ9BA/xembxZrKaN830eH4Y6O25LxhvFRD8w5Lmf1xAOonrRXwZ6ilgjxusebpPwdUARJq+tYWzXVkhYfuA8f6/QiMVzgx9XvR0+mdau/KwbifLpsKpYiNWq0eQ68bJWN54ogGphpa5Wp2ctYq68VVkvIldKYrzVV8ojxQM0ik4alA3JSIJkr2y/XVo4qyHXgjXOIq2qTahvJGjpepHSu2kx8oemposVAS3BRQ+o+/IwrYrAQYbSTPARSMRppkagFNmYJSVMoE9Oz6RQ0dnYaU8+2Zkp0hqtNKnVkMrvjD4EpyXxgnwYoNxWZh1JazjJLJg+ihGm9or8xzxWgHWZS5EgnRlHfbT45vcCoLcQWx1eAWt/Nr89FGCrhjYhwIlsnGtwzm7MZgkXA3aEbrAws1DRy+/Y6WGBqG92SSrnZxi7fgG3kUYxOpXeaCudk2HHqDiCZbclfdj5IghKtppioemun/4RIRNCez/RkAmiQTyMZCph734H7pem6xXQ+WKvWIDQOr2UhBsXewX81O4jDDm3xl4NE0rbmL4H0h1je+X7Sobq6RFfVtnEzr1PgK4+WlcUhgzOe3s/youkXDf9CJHpkoXc6xcQE6dXReX8AZstLCwf9fDw8PDw8PDw8PDw8GDGH8uTL9B14drcAAAAAElFTkSuQmCC"})

    }

    useEffect(() => {
       localStorage.setItem("user" , JSON.stringify(currentUser));
    }, [currentUser])

    // console.log(currentUser);
    return(
        <AuthContext.Provider value={{currentUser, login  }}>
            {children}
        </AuthContext.Provider>
    )
};