/* eslint-disable react-hooks/exhaustive-deps */
import { UserDetailContext } from '@/context/userDetail'
import useAuthCheck from '@/hooks/useAuthCheck'

import { checkFavourites, updateFavourites } from '@/utils/common'

import React, { useContext, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { AiFillHeart } from "react-icons/ai"
import { useAuth } from '@clerk/clerk-react'
import { addToFavorites } from '@/utils/api'

const Heart = ({id}) => {

    const [heartColor, setHeartColor] = useState("white")
    const {validateLogin} = useAuthCheck()
    const {user} = useAuth()

    const {
        userDetails: { favourites, token },
        setUserDetails,
      } = useContext(UserDetailContext);

      useEffect(()=> {
            setHeartColor(()=> checkFavourites(id, favourites))
      },[favourites])


    const {mutate} = useMutation({
        mutationFn: () =>addToFavorites(id, user?.email, token),
        onSuccess: ()=> {
            setUserDetails((prev)=> (
                {
                    ...prev,
                    favourites: updateFavourites(id, prev.favourites)
                }
            ))
        }
    })

    const handleLike = () => {
        if(validateLogin())
        {
            mutate()
            setHeartColor((prev)=> prev === "#fa3e5f" ? "white": "#fa3e5f")
        }
    }

  return (
    <AiFillHeart size={24} color={heartColor} onClick={(e)=> {
        e.stopPropagation()
        handleLike()
    }}/>
  )
}

export default Heart