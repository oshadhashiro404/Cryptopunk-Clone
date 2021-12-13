import { useState, useEffect } from 'react';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcons from '../assets/owner/more.png';
import './Main.css';

const Main = ({ punkListData, selectedPunk }) => {
	const [activePunk, setActivePunk] = useState(punkListData[0]);

	useEffect(() => {
		setActivePunk(punkListData[selectedPunk]);
	}, [punkListData, selectedPunk]);

	return (
		<div className="main">
			<div className="mainContent">
				<div className="punkHightlight">
					<div className="punkContainer">
						<img
							className="selectedPunk"
							src={activePunk.image_original_url}
							alt=""
						/>
					</div>
				</div>
				<div className="punkDetails" style={{ color: '#fff' }}>
					<div className="title">{activePunk.name}</div>
					<span className="itemNumber">#{activePunk.token_id}</span>
					<div className="owner">
						<div className="ownerImageContainer">
							<img src={activePunk.owner.profile_img_url} alt="" />
						</div>
						<div className="ownerDetails">
							<div className="ownerNameAndHandle">
								<div className="ownerAddress">{activePunk.owner.address}</div>
								<div className="ownerHandle">@shiro</div>
							</div>

							<div className="ownerLink">
								<a href="https://www.instagram.com/techforgeeks49/">
									<img src={instagramLogo} alt="" />
								</a>
							</div>
							<div className="ownerLink">
								<a href="https://twitter.com/OshadhaShiro">
									<img src={twitterLogo} alt="" />
								</a>
							</div>
							<div className="ownerLink">
								<a href="https://oshadhashiro.netlify.app/">
									<img src={moreIcons} alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
