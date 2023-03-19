FROM gitpod/workspace-full:latest

RUN bash -c 'VERSION="18" \
  && source $HOME/.nvm/nvm.sh \
  && nvm deactivate \
  && nvm uninstall default \
  && nvm install $VERSION \
  && nvm use $VERSION  \
  && nvm alias default $VERSION \
  && npm install -g pnpm@latest'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix
