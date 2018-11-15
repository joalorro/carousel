import styled from 'styled-components'

const CarouselContainer = styled.div`
	display: flex;
	margin: 0 0 20px 20px;
	transition: ${({sliding}) => sliding ? 'none' : 'transform 1s ease'};
	transform: ${({sliding}) => {
		if (!sliding) return 'translateX(calc(-80% - 20px))'
		return 'translateX(0%)'
	}};
`

export default CarouselContainer