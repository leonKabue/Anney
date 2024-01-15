import Container from 'react-bootstrap/Container';

function Footer() {
    return (
    <footer className="site-footer" style={{position:"fixed", 
                            bottom:"0", 
                            backgroundColor:"white", 
                            width:"100%",
                            zIndex:"1000",
                            paddingTop:"10px",
                            boxShadow:"0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
                            }}>
        <Container>
            <p className='text-end'>&copy; {new Date().getFullYear()} ANNEY inc</p>
        </Container>
    </footer>    
    )
}

export default Footer;