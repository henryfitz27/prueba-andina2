# Dockerfile para desarrollo con hot reload
FROM mcr.microsoft.com/dotnet/sdk:8.0

# Set the working directory
WORKDIR /app

# Install dotnet dev tools
RUN dotnet tool install --global dotnet-ef

# Copy project file and restore dependencies
COPY hub.csproj ./
RUN dotnet restore

# Copy the source code (excluding files in .dockerignore)
COPY . .

# Create shared directory and set permissions
RUN mkdir -p /app/shared && chmod 755 /app/shared

# Expose the port
EXPOSE 5000

# Set environment variables for development
ENV ASPNETCORE_URLS=http://+:5000
ENV ASPNETCORE_ENVIRONMENT=Development

# Use dotnet watch for hot reload in development
ENTRYPOINT ["dotnet", "watch", "run", "--urls", "http://0.0.0.0:5000"]
