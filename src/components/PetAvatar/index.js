import React, { useEffect, useState } from 'react';
import { getAvatar } from 'api/avatar.js';
import Spinner from 'react-bootstrap/Spinner';
import './style.scss';

const PetAvatar = ({
  imgUrl,
  petType = 'dog', 
  readonly = false,
  loading = false,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(imgUrl);

  useEffect(() => {
    if (imgUrl) {
      setImgSrc(imgUrl);
    }
  }, [imgUrl]);

  useEffect(() => {
    if (!imgUrl && !readonly) {
      handleAvatarClick();
    }
  }, [petType]);

  const handleAvatarClick = () => {
    if (!readonly) {
      props.setLoading(true);
      getAvatar(petType).then(res => {
        if(res?.data) {
          setImgSrc(res.data[0]);
          props.setAvatar(res.data[0]);
        }
      }).catch(error => {
        console.log(error.response);
      })
      .finally(() => props.setLoading(false));
    }
  }

  const renderHelper = () => {
    if (loading) {
      return (
        <div className="avatar-wrapper">
          <Spinner animation="border" role="status">
            <span className="sr-only">Fetching...</span>
          </Spinner>
        </div>
      );
    }
    return (
      <div className="avatar-wrapper avatar-input" 
        style={{
          backgroundImage: `url(${imgSrc})`
        }}
        onClick={handleAvatarClick}
      >
        {!readonly && <div className="add-avatar">Get Avatar</div>}
      </div>
    );
  }

  return renderHelper();
};

export default PetAvatar;
