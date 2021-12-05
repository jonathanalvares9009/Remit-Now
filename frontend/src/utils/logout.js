function logout() {
  if (window.web3) {
    window.alert(
      "To logout go to your wallet and disconnect and reload the page after disconnecting."
    );
  }
}

export default logout;
