pipeline {
    agent any
    stages{
        stage('Clone') {
            steps {
                print "Clone git repository"
            }
        }
        stage('Build') {
            steps {
                print "Build Docker project"
            }
        }
        stage('Deploy Image') {
            steps {
                print "Deploy Docker image"
            }
        }
        stage('Testing') {
            steps {
                print "Test"
            }
        }
    }
}